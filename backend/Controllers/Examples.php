<?php

class Examples extends Controller{

    public function __construct(){
        $this->exampleModel = $this->model('Example');
    }

    public function hello(){
        $data = $this->exampleModel->sayHello();
        echo $data;
    }

}