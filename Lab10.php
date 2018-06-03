<?php
//Fill this place

//****** Hint ******
//connect database and fetch data here
@
$db = new mysqli('localhost','root','','travel');

$sql1 = "SELECT* FROM Continents";
$sql2 = "SELECT* FROM Countries";
$sql3 = "SELECT* FROM ImageDetails";


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chapter 14</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    
    

    <link rel="stylesheet" href="css/captions.css" />
    <link rel="stylesheet" href="css/bootstrap-theme.css" />    

</head>

<body>
    <?php include 'header.inc.php'; ?>
    


    <!-- Page Content -->
    <main class="container">
        <div class="panel panel-default">
          <div class="panel-heading">Filters</div>
          <div class="panel-body">
            <form action="Lab10.php" method="get" class="form-horizontal">
              <div class="form-inline">
              <select name="continent" class="form-control">
                <option value="0">Select Continent</option>
                <?php
                //Fill this place

                //****** Hint ******
                //display the list of continents


                $result1 = $db ->query($sql1);

                while($row = $result1->fetch_assoc()) {
                  echo '<option value=' . $row['ContinentCode'] . '>' . $row['ContinentName'] . '</option>';
                }

                ?>
              </select>     
              
              <select name="country" class="form-control">
                <option value="0">Select Country</option>
                <?php 
                //Fill this place

                //****** Hint ******
                /* display list of countries */

                $result2 = $db ->query($sql2);
                while ($col = $result2->fetch_assoc()){
                    echo '<option value=' . $col['ISO'] . '>' . $col['CountryName'] . '</option>';
                }
                ?>
              </select>    
              <input type="text"  placeholder="Search title" class="form-control" name=title>
              <button type="submit" class="btn btn-primary" name="filter">Filter</button>
              </div>
            </form>

          </div>
        </div>     
                                    

		<ul class="caption-style-2">
            <?php 
            //Fill this place
            $img = $select1 = $select2 = $input = "";
            $result3 = $db ->query($sql3);

            function displayImages(){
                global $result3;
                while ($img = $result3->fetch_assoc()){

                    echo "<li>
              <a href=\"detail.php?id={$img['ImageID']}\" class=\"img-responsive\">
                <img src=\"images/square-medium/{$img['Path']}\" alt=\"{$img['Title']}\">
                <div class='caption'>
                  <div class='blur'></div>
                  <div class='caption-text'>
                    <p>".$img['Title']."</p>
                  </div>
                </div>
              </a>
            </li>";
                }

            }
            if(!(isset($_GET['filter']))){
                displayImages();
            }

            if(isset($_GET['filter'])){

                $select1 = $_GET['continent'];
                $select2 = $_GET['country'];
                $input = $_GET['title'];

                if($select1 == '0' && $select2 == '0' && $input == '') {
                    displayImages();
                }

                elseif (!($select1 == '0')){
                    while ($img = $result3->fetch_assoc()){

                        if($img['ContinentCode'] == $select1 && ($img['CountryCodeISO'] == $select2 || $select2 == '0') && ( $input == '' || $input == $img['Title'])){
                           echo "<li>
              <a href=\"detail.php?id={$img['ImageID']}\" class=\"img-responsive\">
                <img src=\"images/square-medium/{$img['Path']}\" alt=\"{$img['Title']}\">
                <div class='caption'>
                  <div class='blur'></div>
                  <div class='caption-text'>
                    <p>".$img['Title']."</p>
                  </div>
                </div>
              </a>
            </li>";
                        }

                    }
                }

                elseif (!($select2 == '0')){

                    while ($img = $result3->fetch_assoc()){

                        if($img['CountryCodeISO'] == $select2 && ($select1 == '0' || $img['ContinentCode'] == $select1) && ($input == '' || $input == $img['Title'])){

                            echo "<li>
              <a href=\"detail.php?id={$img['ImageID']}\" class=\"img-responsive\">
                <img src=\"images/square-medium/{$img['Path']}\" alt=\"{$img['Title']}\">
                <div class='caption'>
                  <div class='blur'></div>
                  <div class='caption-text'>
                    <p>".$img['Title']."</p>
                  </div>
                </div>
              </a>
            </li>";
                        }

                    }
                }
                elseif (!($input == '')){
                    while ($img = $result3->fetch_assoc()){
                        if(($img['CountryCodeISO'] == $select2 || $select2 == '0') && ($select1 == '0' || $img['ContinentCode'] == $select1) &&  $input == $img['Title']){
                            echo "<li>
              <a href=\"detail.php?id={$img['ImageID']}\" class=\"img-responsive\">
                <img src=\"images/square-medium/{$img['Path']}\" alt=\"{$img['Title']}\">
                <div class='caption'>
                  <div class='blur'></div>
                  <div class='caption-text'>
                    <p>".$img['Title']."</p>
                  </div>
                </div>
              </a>
            </li>";
                        }

                    }
                }
            }
//                      if($select1 = 'Select Continent' && $select2 = 'Select Country' && $input = ''){
            //            $select1 = $_GET['continent'];
            ////            $select2 = $_GET['country'];
            ////            $input = $_GET['title'];
            //****** Hint ******
            /* use while loop to display images that meet requirements ... sample below ... replace ???? with field data
            <li>
              <a href="detail.php?id=????" class="img-responsive">
                <img src="images/square-medium/????" alt="????">
                <div class="caption">
                  <div class="blur"></div>
                  <div class="caption-text">
                    <p>????</p>
                  </div>
                </div>
              </a>
            </li>        
            */

            ?>
       </ul>       

      
    </main>
    
    <footer>
        <div class="container-fluid">
                    <div class="row final">
                <p>Copyright &copy; 2017 Creative Commons ShareAlike</p>
                <p><a href="#">Home</a> / <a href="#">About</a> / <a href="#">Contact</a> / <a href="#">Browse</a></p>
            </div>            
        </div>
        

    </footer>


        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

</html>