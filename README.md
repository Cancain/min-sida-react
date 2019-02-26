This is Tomas Erikssons framework for working with PHP, react and axios.

You will need to add your own folder called "config" under backend. Then add a "config.php" file with the following content:

<?php

//DB params
define('DB_HOST', '_DATABASE_HOST_'); 
define('DB_USER', '_USER_');
define('DB_PASS', '_PASSWORD_');
define('DB_NAME', '_NAME_OF_DATABASE_');

//App root 
define('APPROOT', dirname(dirname(__FILE__)));
//URL root
// For example: http://localhost/dowMvc/
define('URLROOT', '_YOUR_URL_ROOT_');
//Site name
define('SITENAME', '_YOUR_SITENAME_');

?>