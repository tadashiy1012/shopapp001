<?php

namespace App\Http\Controllers;

use App\Item;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemController extends Controller {

    public function getAll() {
        $items = Item::all();
        foreach($items as $item) {
            if ($item->image === null || $item->image === '') {
                $item->image = Item::B64;
            }
        }
        return $items;
    }

    public function getLatest() {
        $items = Item::orderBy('id', 'desc')->take(5)->get();
        foreach($items as $item) {
            if ($item->image === null || $item->image === '') {
                $item->image = Item::B64;
            }
        }
        return $items;
    }

    public function getOne($id) {
        return Item::find($id);
    }

    public function update(Request $req) {
        $tgt = Item::where('id', $req->id)->first();
        $tgt->name = $req->name;
        $tgt->description = $req->description;
        $tgt->price = $req->price;
        $tgt->num = $req->num;
        $tgt->category = $req->category;
        $tgt->image = $req->image;
        $tgt->save();
        return ['ok', 'ItemController@update'];
    }

}