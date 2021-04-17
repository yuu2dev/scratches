<?php 

class RoundRobin {

    /**
     * 준비 큐
     * @var array
     */
    private $queue;
    
    /**
     * 완료된 프로세스
     * @var array
     */
    private $complete = [];

    /**
     * 시간 할당량
     * @var int
     */
    private $time_quota;

    /**
     * 전체 걸린시간
     * @var int
     */
    private $total_time = 0;

    /**
     * @access public
     * @return array
     */
    public function getQueue() : array {
        return $this->queue;
    }

    /**
     * @access private
     * @return Process
     */
    private function getFirstQueue() {
        return $this->queue[0];
    }

    /**
     * @access public
     * @param array $queue
     * @return self
     */
    public function setQueue(array $queue) : self {
        $this->queue = $queue;
        return $this;
    }
    
    /**
     * @access public
     * @return int
     */
    public function getTotalTime() : int {
        return $this->total_time;
    }

    /**
     * @access public
     * @return int
     */
    public function getTimeQuota() : int {
        return $this->time_quota;
    }

    /**
     * @access public
     * @param int $time_quota
     * @return self
     */
    public function setTimeQuota(int $time_quota = 1) : self {
        $this->time_quota = $time_quota;
        return $this;
    }
    
    /**
     * @access public
     * @return array
     */
    public function getComplete() : array {
        return $this->complete;
    }

    /**
     * @access public
     * @return bool
     */
    public function goround() {

        /** @var int */
        $time_quota = $this->getTimeQuota();

        if ($time_quota <= 0) {
            throw new Exception("시간할당량은 0보다 커야합니다.");
            return false;
        }
        
        while (true) {

            $on_process = $this->getFirstQueue();

            // 프로세스 남은시간이 없는 경우
            if ($on_process->getRemainTime() <= 0) {
                $this->complete($on_process);
                
                if (empty($this->queue)) {
                    break;
                }

                $on_process = $this->getFirstQueue();
                $time_quota = $this->getTimeQuota();
            } else if ($time_quota <= 0) {
                $this->swap();
                $time_quota = $this->getTimeQuota();
                $on_process = $this->getFirstQueue();
            }
            
            $on_process->work();
            $this->wait();
            $time_quota--;
            // $this->debug(13);
            $this->total_time++;
        }
        
        return true;
    }

    /**
     * @access private
     * @return void
     */
    private function swap() : void {
        $this->queue[] = array_shift($this->queue);
    }

    /**
     * @access public
     * @return self
     */
    public function complete($process) : self {
        $this->complete[] = array_shift($this->queue);
        return $this;
    }
    
    /**
     * 작업 중이지 않은 큐의 대기 시간 증가
     * @access private
     * @return self
     */
    private function wait() : self {
        foreach ($this->queue as $process) {
            if ($this->getFirstQueue()->getName() === $process->getName()) {
                continue;
            }
            // 만약 도착시간이 전체 소요시간 보다 일찍인 경우
            if ($process->getComeTime() <= $this->total_time) {
                $process->wait();
            }
        }

        return $this;
    }

    public function debug($cur_time) {

        if ($this->total_time === $cur_time) {
        
            print_r($this->getFirstQueue());
            print_r($this->getQueue());
            print_r($this->getComplete());
            exit;
        }
    }
}
