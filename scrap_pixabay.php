<?php

include 'simple_html_dom.php';

$keyword = "kebab";
$html = file_get_html('https://pixabay.com/fr/photos/?q='.urlencode($keyword));

$imgs = $html->find('img');

foreach($imgs as $img) {
    
    if($img->src == '/static/img/blank.gif') continue;
    
    $data = file_get_contents($img->src);
    file_put_contents(uniqid().'.jpg',$data);
    echo $img->src."\n";
}