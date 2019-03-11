<? 

class Users extends Controller{
    public function __construct(){
        $this->userModel = $this->model('User');
    }

    public function logIn(){
        die('shit works');
        // $this->view('Views/index.php');
    }
}