<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegistController extends Controller {

    public function registUser(Request $req) {
        $exist = User::where('name', $req->name)->first();
        if ($exist !== null) {
            return ['ng', 'RegistController@registUser'];
        }
        $user = new User;
        $user->name = $req->name;
        $user->password = $req->password;
        $user->admin = false;
        $user->save();
        return ['ok', 'RegistController@registUser'];
    }

}