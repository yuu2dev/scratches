<?php 

class Sort {

    const DESC = false;
    const ASD  = true;

    public function __construct() {}

    /**
     * 버블 정렬
     */
    public function bubble(array $args, bool $sord = DESC) {

        for ($i=0; $i<count($args)-1; $i++) {
            for ($j=0; $j<count($args)-$i-1; $j++) {

                switch ($sord) {
                    case DESC : $condition = $args[$j] < $args[$j+1]; break;
                    case ASD  : $condition = $args[$j] > $args[$j+1]; break;
                }

                if ($condition) {
                    $temp = $args[$j];
                    $args[$j] = $args[$j+1];
                    $args[$j+1] = $temp;
                }
            }
        }
        return $args;
    }

    /**
     * 선택 정렬
     */
    public function selection(array $args, bool $sord = DESC) {

        for ($i=0; $i<count($args)-1; $i++) {
            $min = $i;

            for ($j=$i+1; $j<count($args); $j++) {
                if ($args[$j] < $args[$min]) {
                    $min = $j;
                }
            }
            $temp = $args[$i];
            $args[$i] = $args[$min];
            $args[$min] = $temp;
        }
        return $args;
    }
}