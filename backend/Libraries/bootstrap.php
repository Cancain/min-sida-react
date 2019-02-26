<?php

//Setup for headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

//Require the config file 
require_once( '../Config/config.php');

//Reqire libraries
require_once('Core.php');
require_once('Controller.php');
require_once('Database.php');

//Initializes a new Core class
$init = new Core();