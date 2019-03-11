<? 

class Users extends Controller{
    public function __construct(){
        $this->userModel = $this->model('User');
    }

    public function logIn($post){
        $post = json_decode(file_get_contents('php://input'), true);

        $data = [
            'foundUser' => $this->userModel->getUserByEmail($post['email']),
            'errMsg' => '',
            'loginSuccess' => false
        ];

        if($data['foundUser']->password === $post['password']){
            $data['loginSuccess'] = true;
            $data['errMsg'] = 'match';
        } else {
            $data['errMsg'] = 'no match';
        }

        echo json_encode($data);

        

    }
}