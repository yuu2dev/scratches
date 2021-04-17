<?php

class Process {

    // 프로세스명
    private $name;

    /**
     * 도착시간
     * @var int 
     */
    private $come_time;

    /**
     * CPU 사이클
     * @var int
     */
    private $work_time;

    /**
     * 대기시간
     */
    private $wait_time = 0;

    /**
     * 반환시간
     */
    private $return_time = null;

    /**
     * 남은 CPU 사이클
     * @var int
     */
    private $remain_time;

    public function __construct(string $name, int $come_time, int $work_time) {
        $this->name = $name;
        $this->come_time   = $come_time;
        $this->work_time   = $work_time;
        $this->remain_time = $work_time;
    }

    /**
     * @access public
     * @return string
     */
    public function getName() : ?string {
        return $this->name;
    }

    /**
     * @access public
     * @return int
     */
    public function getComeTime() : int {
        return $this->come_time;
    }
    
    /**
     * @access public
     * @return int
     */
    public function getWorkTime() : int {
        return $this->work_time;
    }
    
    /**
     * @access public
     * @return int
     */
    public function getWaitTime() : int {
        return $this->wait_time;
    }

    /**
     * @access public
     * @return int
     */
    public function getRemainTime() : int {
        return $this->remain_time;
    }

    /**
     * @access public
     * @return self
     */
    public function work() : self {
        $this->remain_time--;
        return $this;
    }

    /**
     * @access public
     * @return self
     */
    public function wait() : self {
        $this->wait_time++;
        return $this;
    }
}