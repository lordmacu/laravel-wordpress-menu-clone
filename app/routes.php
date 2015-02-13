<?php



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
  Route::get('/menucreator', array('as' => 'menucreator','uses'=>'HomeController@menucreator'));
   Route::get('/deletemenu', array('as' => 'deletemenu','uses'=>'HomeController@deletemenu'));
 
 
  
 Route::post('/createmenu', array('as' => 'createmenu','uses'=>'HomeController@createmenu'));
 Route::post('/menu', array('as' => 'menu','uses'=>'HomeController@menu'));
 Route::post('/menupreview', array('as' => 'menupreview','uses'=>'HomeController@menupreview'));

 
Route::get('/menupreview' , 'HomeController@menupreview');
Route::get('/getallmenus', array('as' => 'getallmenus','uses'=>'HomeController@getallmenus'));
Route::post('/menupost', array('as' => 'menupost','uses'=>'HomeController@menupost'));
Route::post('/updatemenus', array('as' => 'updatemenus','uses'=>'HomeController@updatemenus'));

Route::post('/menudeletepost', array('as' => 'menudeletepost','uses'=>'HomeController@menudeletepost'));


Route::get('/', function()
{
	return View::make('hello');
});
