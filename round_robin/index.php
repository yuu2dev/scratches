<?php 
// 2021.04.17.토 운영체제 중간제출 과제물... 손으로 하니 힘들어 만듦

require "RoundRobin.php";
require "Process.php";

$queue = [
    new Process('A', 0, 7),
    new Process('B', 1, 2),
    new Process('C', 3, 4),
    new Process('D', 4, 1),
    new Process('E', 7, 2),
];

$rr = new RoundRobin;
$rr->setTimeQuota(2)->setQueue($queue)->goround();

$complete = $rr->getComplete();

// print_r($rr->getComplete()); exit;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoundRobin</title>
</head>
<body>
    <table>
        <tr>
            <th></th>
            <?php foreach ($complete as $p) : ?>
            <th><?= $p->getName() ?></th>
            <?php endforeach; ?>
        </tr>
        <tr>
            <td>대기시간</td>
            <? 
                $per_wait_time = 0;
                foreach ($complete as $p) {
                    $wait_time = $p->getWaitTime();
                    $per_wait_time += $wait_time;
                    echo "<td>${wait_time}</td>";
                }
            ?>
        </tr>
        <tr>
            <td>반환시간</td>
            <? 
                $per_return_time = 0;
                foreach ($complete as $p) {
                    $return_time = $p->getWaitTime() + $p->getWorkTime();
                    $per_return_time += $return_time;
                    echo "<td>${return_time}</td>";
                }
            ?>
        </tr>
        
    </table>
    <br>
    <div>
        <span>전체 시간 : <?= $rr->getTotalTime() ?> </span><br>
        <span>평균 대기시간 : <?= $per_wait_time / count($complete) ?></span><br>
        <span>평균 반환시간 : <?= $per_return_time / count($complete) ?></span><br>
    </div>
</body>
</html>