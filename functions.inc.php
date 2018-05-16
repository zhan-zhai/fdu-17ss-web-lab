<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $thumb = "";
    $reviewsRating = "";
    $userName = "";
    $title = "";
    $excerpt = "";
    $reviewsNum = "";
    $date = "";
    switch ($number){
        case 1:{
            $reviewsRating.=$reviewsRating1;
            $thumb.=$thumb1;
            $userName.=$userName1;
            $title.=$title1;
            $excerpt.=$excerpt1;
            $reviewsNum.=$reviewsNum1;
            $date.=$date1;
        }break;
        case 2:{
            $reviewsRating.=$reviewsRating2;
            $thumb.=$thumb2;
            $userName.=$userName2;
            $title.=$title2;
            $excerpt.=$excerpt2;
            $reviewsNum.=$reviewsNum2;
            $date.=$date2;
        }break;case 3:{
        $reviewsRating.=$reviewsRating3;
        $thumb.=$thumb3;
        $userName.=$userName3;
        $title.=$title3;
        $excerpt.=$excerpt3;
        $reviewsNum.=$reviewsNum3;
        $date.=$date3;
    }break;
    }

    echo "<div class=\"row\">
        <div class=\"col-md-4\">" , generateLink('post.php?id=1','<img src="images/'.$thumb.'" alt="Ekklisia Agii Isidori Church" class="img-responsive"/>',''),
    "</div>
           <div class=\"col-md-8\">
             <h2>$title</h2>
            <div class=\"details\">Posted by&nbsp",

           generateLink('user.php?id=2',$userName,''),

             "<span class=\"pull-right\">$date</span>
             <p class=\"ratings\">",

             constructRating($reviewsRating),

             "$reviewsNum Reviews</p>
        </div>
        <p class=\"excerpt\">$excerpt</p>
        <p><a href=\"post.php?id=1\" class=\"btn btn-primary btn-sm\">Read more</a></p></div></div><hr/>";




}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>