<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class Test extends ResourceController
{
    public function index()
    {
    return $this->respond(['message' => 'Hello World']);
    }
}
