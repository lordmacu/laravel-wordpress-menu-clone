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

	 
	 
	 //versiondos
	 
	 public function generatemenucontrol(){
		
		
		
		
		foreach (Input::get("arraydata") as   $value) {
			
			$menuitem= MenuItem::find($value["id"]);
			$menuitem->parent=$value["parent"];
			$menuitem->sort=$value["sort"];
			$menuitem->depth=$value["depth"];
			 $menuitem->save();
			echo $value["sort"];
				}
	 }
	 ///
	 
	 
	protected $arraygeneral = array();
	function ingreasralarray($array, $index) {
		$this -> arraygeneral[$index][] = $array;
	}

	public function reorganizar() {
		$stringjson = '[{"profundidad":0,"id":"1"},{"profundidad":1,"id":"2"},{"profundidad":1,"id":"3"},{"profundidad":1,"id":"4"},{"profundidad":0,"id":"5"},{"profundidad":0,"id":"6"},{"profundidad":0,"id":"7"},{"profundidad":1,"id":"8"},{"profundidad":0,"id":"9"}]';
		
		$stringjson='[{"profundidad":0,"id":"1"},{"profundidad":0,"id":"2"},{"profundidad":0,"id":"3"},{"profundidad":0,"id":"4"},{"profundidad":0,"id":"5"},{"profundidad":0,"id":"6"},{"profundidad":0,"id":"8"},{"profundidad":1,"id":"9"},{"profundidad":1,"id":"7"}]';

		$arraymenus = json_decode($stringjson, true);
		$arraytemporal = array();
		$contador = 0;
		for ($i = 0; $i < count($arraymenus); $i++) {

			$arraymenus[$i]["contador"] = $contador;
			$arraytemporal[$arraymenus[$i]["profundidad"]][] = $arraymenus[$i];

			$contador++;
		}

//echo json_encode($arraytemporal);

		$arraygeneraldos = array();

		for ($i = 0; $i < count($arraytemporal); $i++) {
			for ($j = 0; $j < count($arraytemporal[$i]); $j++) {
				
				
				
				$arraygeneraldos[$arraytemporal[$i][$j]["id"]]["padre"] = $arraytemporal[$i][$j];
				if (isset($arraytemporal[$i][$j + 1])) {
					$rangos = $this -> filtrarrango($arraytemporal[$i][$j], $arraytemporal[$i][$j + 1], $arraymenus);
					$arraygeneraldos[$arraytemporal[$i][$j]["id"]]["hijos"] = $rangos;
				}

				


			}
		}
		
		//echo json_encode($arraygeneraldos);
		
		$arrayreorganizado = $this -> reorganizararray($arraygeneraldos);

		//echo json_encode($arraygeneraldos);

		$filtrararrayexistente=$this->filtrararrayexistente($arrayreorganizado);
		echo json_encode($filtrararrayexistente);
	}

public function filtrararrayexistente($arrayreorganizado){
//	echo json_encode($arrayreorganizado);
	$arrayfin=array();
	for ($r = 1; $r < count($arrayreorganizado)+1; $r++) {

			$validarexistencia = $this -> validarexistencia($arrayreorganizado, $arrayreorganizado[$r]["padre"]["id"]);

			if ($validarexistencia == 1) {
				echo "este valor esta en algun hijo".$arrayreorganizado[$r]["padre"]["id"];
				echo "<br><br>";
			}else{
				array_push($arrayfin,$arrayreorganizado[$r]);
			}
		}
	return $arrayfin;
}

	public function validarexistencia($array, $existencia) {
		$retorno = 0;
		foreach ($array as $value) {

			if (isset($value["hijos"])) {

				if (count($value["hijos"]) != 0) {

					for ($i = 0; $i < count($value["hijos"]); $i++) {

						if ($value["hijos"][$i]["id"] == $existencia) {

							$retorno = 1;

						}

					}
				}

			}

		}
		return $retorno;
	}

	public function reorganizararray($arraygeneraldos) {
		$arrayitems = array();
		$contador = 0;
		foreach ($arraygeneraldos as $key => $value) {

			//var_dump($value);
			$arrayitems[$key]["padre"] = $value["padre"];
			$arrayitems[$key]["padre"]["contador"] = $contador;

			if (isset($value["hijos"])) {
				$contadors = 0;
				foreach ($value["hijos"] as $hij) {
					//echo json_encode($hij);
					//echo "<br><br>";
					$arrayitems[$key]["hijos"][$contadors] = $hij;

					$contadors++;
				}
				//echo json_encode($value["hijos"]);
			}

			$contador++;
		}
		return $arrayitems;
	}

	public function filtrarrango($rangouno, $rangodos, $array) {
		$arrayfin = array();
		for ($i = $rangouno["contador"]; $i < $rangodos["contador"]; $i++) {
			if ($rangouno["profundidad"] < $array[$i]["profundidad"]) {
				$arrayfin[$i] = $array[$i];
			}

		}
		return $arrayfin;
	}

	public function menudos() {
		
		
		$menuitems= new MenuItem();
		$menus=	$menuitems->getall(1);
		
		return View::make('menudos')->with("menus",$menus);
	}

	public function deletemenu() {
		$menus = new MenuItem();
		$getall = $menus -> getall(Input::get("m"));
		if (count($getall) == 0) {
			$menudelete = Menu::find(Input::get("m"));
			$menudelete -> delete();
			return Redirect::route("menucreator", array("resp" => "has been deleted successfully"));
		} else {
			return Redirect::route("menucreator", array("resp" => "You have to delete all items first"));
		}
	}

	public function createmenu() {
		$menu = new Menu();
		$menu -> name = Input::get("name");
		$menu -> save();
		return Redirect::route("menucreator");
	}

	public function menucreator() {
		$menu = Menu::all();
		return View::make('menucreator') -> with("menus", $menu);
	}

	public function getwidgetinformation() {

		$widget = Widget::find(Input::get("id"));

		return $widget -> toJson();
	}

	public function createwidget() {

		if (Input::has("idwidget")) {
			$widget = Widget::find(Input::get("idwidget"));
		} else {
			$widget = new Widget();
		}
		$widget -> name = Input::get("name");
		$widget -> description = Input::get("widgeteditor");
		$widget -> save();
		return Redirect::route("widgetcreator");

	}

	public function widgetcreator() {
		$widget = Widget::all();

		return View::make('widgetcreator') -> with("widgets", $widget);
		;
	}

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

	public function deletewidget() {

		$widget = Widget::find(Input::get("id"));
		$widget -> delete();
		return Redirect::route("widgetcreator", array("resp" => "has been deleted successfully"));
	}

	public function insertardata($data, $padre) {
		foreach ($data as $in) {
			$menu = new MenuItem();
			$menufind = MenuItem::find($in["id"]);
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

	public function getallmenus() {
		$menuliist = MenuItem::where("menu", Input::get("menu")) -> orderBy("label", "asc") -> lists("label", "id");
		$menuliist[0] = "Select parent";
		$html = '	<label for="label">MenuItem</label>';
		$html .= Form::select('parent', $menuliist, Input::get("parent"), array("class" => "form-control", "id" => "parentselect"));
		return $html;
	}

	public function updatemenus() {
		if (Input::get("id") == 0) {
			$menu = new MenuItem();
			if (Input::has("label")) {
				$menu -> label = Input::get("label");
			}
			if (Input::has("class")) {
				$menu -> class = Input::get("class");

			}
			if (Input::has("link")) {
				$menu -> link = Input::get("link");
			}
			if (Input::has("parent")) {
				if (Input::get("parent") != "") {
					$menu -> parent = Input::get("parent");
				} else {
					$menu -> parent = 0;
				}
			}
			$menu -> sort = 0;
			echo $menu -> save();
		} else {
			$menu = Menu::find(Input::get("id"));
			if (Input::has("label")) {
				$menu -> label = Input::get("label");
			}
			if (Input::has("parent")) {
				$menu -> parent = Input::get("parent");
			}
			if (Input::has("class")) {
				$menu -> class = Input::get("class");
			}
			if (Input::has("link")) {
				$menu -> link = Input::get("link");
			}
			$menu -> save();
		}

	}

	public function menudeletepost() {
		$menumodel = new MenuItem();
		$sons = $menumodel -> getsons(Input::get("id"));
		if (count($sons) == 0) {
			$menub = MenuItem::find(Input::get("id"));
			$menub -> delete();
			echo json_encode(array("resp" => "This item has been deleted successfully", "error" => 2));
		} else {
			echo json_encode(array("resp" => "This menu item has children, delete them first.", "error" => 1));
		}

	}

	public function generarmenu($menus) {
		$html = '<style>  .infolist{ display:block !important}</style>';
		foreach ($menus as $menu) {
			$menustring = explode(" ", $menu['class']);

			if (!isset($menustring[1])) {
				$menustring[1] = "";
			}
			if (!isset($menustring[0])) {
				$menustring[0] = "";
			}
			if ($menustring[0] == "submenumega") {
				$html .= '<div class="' . $menustring[1] . '">';
			}
			$html .= '<li id="menuitem_' . $menu['id'] . '"  data-class="' . $menu['class'] . '" data-sort="' . $menu['sort'] . '" data-link="' . $menu['link'] . '"  data-label="' . $menu['label'] . '" data-id="' . $menu['id'] . '">';
			if ($menustring[0] == "submenumega") {
				$html .= '<span>' . $menu['label'] . ' </span>';
			} else {
				$html .= '<a href="' . $menu['link'] . '" class="sf-with-ul">' . $menu['label'] . ' </a>';
			}
			if ($menustring[0] == "sf-megas") {
				$html .= '<div class="sf-mega"><div class="sf-mega-content"><div class="row">';
			}
			if (isset($menu["hijos"])) {
				if ($menustring[0] == "sf-megas") {
					$html .= '<ul >';

				} else {
					if ($menustring[0] == "submenumega") {
						$html .= '<ul  class="infolist">';

					} else {
						$html .= '<ul class="dd-list">';
					}
				}
				$html .= $this -> generarmenu($menu["hijos"]);
				$html .= '</ul>';
			}
			if ($menustring[0] == "sf-megas") {
				$html .= '</div></div></div>';
			}
			if ($menustring[0] == "submenumega") {
				$html .= '</div>';
			}
			$html .= '</li>';
		}
		return $html;
	}

	public function generatemenu() {

		$menu = new MenuItem();
		$getall = $menu -> getall(1);
		$menu = array('items' => array(), 'parents' => array());
		foreach ($getall as $key => $items) {
			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}
		$items = $this -> buildMenu(0, $menu);
		$menufind = Menu::find(Input::get("id"));

		$widget = new Widget();

		$widgetbymenu = $widget -> getWidgetByMenu(Input::get("id"));
		if ($widgetbymenu -> count()) {
			$widget = Widget::find($widgetbymenu[0] -> id);
		}

		$widget -> name = $menufind -> name;
		$widget -> id_component = Input::get("id");
		$widget -> description = $this -> generarmenu($items);
		$widget -> save();

	}

	public function menupreview() {
		$menu = new MenuItem();
		$getall = $menu -> getall(1);
		$menu = array('items' => array(), 'parents' => array());
		foreach ($getall as $key => $items) {
			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}
		$items = $this -> buildMenu(0, $menu);

		//	echo $this->generarmenu($items);
		return View::make('menupreview') -> with("menus", $items);
		;
	}

	public function menupost() {
		DB::table('menu_items') -> delete();
		$this -> insertardata(Input::get("jsondata"), 0);
	}

	public function menu() {
		$menu = new MenuItem();
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
