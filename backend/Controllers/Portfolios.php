<?php


class Portfolios extends Controller{
    public function __construct(){
        $this->portfolioModel = $this->model('Portfolio');
    }

    public function getAllPortfolios(){
        $data = $this->portfolioModel->getAllPortfolio();
        echo utf8_decode($data);
    }

    public function addPortfolio(){
        $data = json_decode(file_get_contents('php://input'), true);

        $this->portfolioModel->addPortfolio($data);        
    }

    public function getHighestId(){
        $data = $this->portfolioModel->getHighestId();

        echo(json_encode($data));
    }
}

