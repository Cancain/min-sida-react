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

    public function isAdmin($id){
        $data = $this->userModel->idAdminById($id);

        echo var_dump($data);
    }

    public function sendMail(){
        $data = json_decode(file_get_contents('php://input'), true);

        $message = htmlspecialchars($data['text']);
        $fromMail = htmlspecialchars($data['mail']);
        $toEmail = 'eriksson.tomas@gmail.com';
        $subject = 'Message from your website';

        $body = '<h2>Contact request<h2>
        <h4>Email</h4><p>'.$fromMail.'</p>
        <h4>Message</h4><p>'.$message.'</p>';

        //Email headers
        $headers = "MIME-Version: 1.0" ."\r\n";
        $headers .= "Content-Type:text/html;charset=UTF-8" . "
            \r\n";

        //Additional headers
        $headers .= "From: " . "<".$fromMail.">"."\r\n";

        if(mail($toEmail, $subject, $body, $headers)){
            echo "Mail sent";
        } else {
            echo "Mail failed, try again later";
        }
    }
}