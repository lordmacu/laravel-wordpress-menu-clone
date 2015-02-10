<?php

class HomeController extends BaseController {

	/*
	 |--------------------------------------------------------------------------
	 | Default Home Controller
	 |--------------------------------------------------------------------------
	 |
	 | You may wish to use controllers instead of, or in addition to, Closure
	 | based routes. That's great! Here is an example controller method to
	 | get you started. To route to this controller, just add the route:
	 |
	 |	Route::get('/', 'HomeController@showWelcome');
	 |
	 */

	function buildMenu($parent, $menu) {

		$array = array();
		$contador = 0;
		if (isset($menu['parents'][$parent])) {

			foreach ($menu['parents'][$parent] as $itemId) {
				if (!isset($menu['parents'][$itemId])) {
					$array[$contador] = $menu['items'][$itemId];
				}
				if (isset($menu['parents'][$itemId])) {
					$array[$contador] = $menu['items'][$itemId];

					$array[$contador]["hijos"] = $this -> buildMenu($itemId, $menu);
				}
				$contador++;
			}
		}
		return $array;
	}

	public function insertardata($data, $padre) {
		foreach ($data as $in) {
			$menu = new Menu();
			$menufind = Menu::find($in["id"]);
			if (count($menufind) != 1) {
				$menu -> id = $in["id"];
				$menu -> label = $in["label"];
				$menu -> link = $in["link"];
				$menu -> class = $in["class"];  
				$menu -> sort = $in["sort"];
				$menu -> parent = $padre;
				$menu -> save();
				if (isset($in["hijos"])) {
					$this -> insertardata($in["hijos"], $menu -> id);
				}
			}

		}

	}
	
	public function getallmenus(){
		$menuliist=Menu::where("menu",Input::get("menu"))->orderBy("label","asc")->lists("label","id");
		$menuliist[0]="Select parent";
		$html='	<label for="label">Menus</label>';
		$html.= Form::select('parent', $menuliist,Input::get("parent"),array("class"=>"form-control","id"=>"parentselect"));
		return $html;
	}
	

	public function updatemenus() {


		if (Input::get("id") == 0) {
			$menu = new Menu();
		 if(Input::has("label")){
							$menu -> label = Input::get("label");
			
			}
			if(Input::has("class")){
			$menu -> class =  Input::get("class");
			
			}
			if(Input::has("link")){
			$menu -> link = Input::get("link");
			}
			
				if(Input::has("parent")){
					if(Input::get("parent")!=""){
								$menu -> parent = Input::get("parent");
						
					}else{
									$menu -> parent = 0;
						
					}
			}
			
			$menu -> sort = 0;
			echo $menu -> save();
		} else {
			$menu = Menu::find(Input::get("id"));
			if(Input::has("label")){
							$menu -> label = Input::get("label");
			
			}
				if(Input::has("parent")){
			$menu -> parent = Input::get("parent");
			}
			
			if(Input::has("class")){
			$menu -> class =  Input::get("class");
			
			}
			if(Input::has("link")){
			$menu -> link = Input::get("link");
			
			}
			$menu -> save();
		}

	}

	public function menudeletepost() {
		
		$menumodel = new Menu();
		$sons=$menumodel -> getsons(Input::get("id"));
		if(count($sons)==0){
		$menub = Menu::find(Input::get("id"));
	
		$menub -> delete();
					echo json_encode(array("resp"=>"This item has been deleted successfully","error"=>2));
		
		}else{
			echo json_encode(array("resp"=>"This menu item has children, delete them first.","error"=>1));
		}
	

	}


public function menupreview(){
	$menu = new Menu();
		$getall = $menu -> getall(1);

		$menu = array('items' => array(), 'parents' => array());

		foreach ($getall as $key => $items) {

			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}

		$items = $this -> buildMenu(0, $menu);
	
	
return View::make('menupreview') -> with("menus", $items); ;	
}

	public function menupost() {

		DB::table('menus') -> delete();

		$this -> insertardata(Input::get("jsondata"), 0);

	}

	public function menu() {

		$menu = new Menu();
		
		
		$getall = $menu -> getall(Input::get("m"));

		$menu = array('items' => array(), 'parents' => array());

		foreach ($getall as $key => $items) {

			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}

		$items = $this -> buildMenu(0, $menu);

		return View::make('menu') -> with("menus", $items);
	}

	public function showWelcome() {
		return View::make('hello');
	}

}
