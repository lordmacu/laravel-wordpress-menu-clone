<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="en" class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>    <html lang="en" class="lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>    <html lang="en" class="lt-ie9"> <![endif]-->
<!--[if IE 9]>    <html lang="en" class="ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html lang="en">
	<!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
		<title>Nestable</title>
		<style type="text/css">
			.cf:after {
				visibility: hidden;
				display: block;
				font-size: 0;
				content: " ";
				clear: both;
				height: 0;
			}
			* html .cf {
				zoom: 1;
			}
			*:first-child+ html .cf {
				zoom: 1;
			}

			html {
				margin: 0;
				padding: 0;
			}
			body {
				font-size: 100%;
				margin: 0;
				padding: 1.75em;
				font-family: 'Helvetica Neue', Arial, sans-serif;
			}

			h1 {
				font-size: 1.75em;
				margin: 0 0 0.6em 0;
			}

			a {
				color: #2996cc;
			}
			a:hover {
				text-decoration: none;
			}

			p {
				line-height: 1.5em;
			}
			.small {
				color: #666;
				font-size: 0.875em;
			}
			.large {
				font-size: 1.25em;
			}

			/**
			 * Nestable
			 */

			.dd {
				position: relative;
				display: block;
				margin: 0;
				padding: 0;
				max-width: 100%;
				list-style: none;
				font-size: 13px;
				line-height: 20px;
			}

			.dd-list {
				display: block;
				position: relative;
				margin: 0;
				padding: 0;
				list-style: none;
			}
			.dd-list .dd-list {
				padding-left: 30px;
			}
			.dd-collapsed .dd-list {
				display: none;
			}

			.dd-item, .dd-empty, .dd-placeholder {
				display: block;
				position: relative;
				margin: 0;
				padding: 0;
				min-height: 20px;
				font-size: 13px;
				line-height: 20px;
			}

			.dd-handle {
				display: block;
				height: 30px;
				margin: 5px 0;
				padding: 5px 10px;
				color: #333;
				text-decoration: none;
				font-weight: bold;
				border: 1px solid #ccc;
				background: #fafafa;
				background: -webkit-linear-gradient(top, #fafafa 0%, #eee 100%);
				background: -moz-linear-gradient(top, #fafafa 0%, #eee 100%);
				background: linear-gradient(top, #fafafa 0%, #eee 100%);
				-webkit-border-radius: 3px;
				border-radius: 3px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}
			.dd-handle:hover {
				color: #2ea8e5;
				background: #fff;
			}

			.dd-item > button {
				display: block;
				position: relative;
				cursor: pointer;
				float: left;
				width: 25px;
				height: 20px;
				margin: 5px 0;
				padding: 0;
				text-indent: 100%;
				white-space: nowrap;
				overflow: hidden;
				border: 0;
				background: transparent;
				font-size: 12px;
				line-height: 1;
				text-align: center;
				font-weight: bold;
			}
			.dd-item > button:before {
				content: '+';
				display: block;
				position: absolute;
				width: 100%;
				text-align: center;
				text-indent: 0;
			}
			.dd-item > button[data-action="collapse"]:before {
				content: '-';
			}

			.dd-placeholder, .dd-empty {
				margin: 5px 0;
				padding: 0;
				min-height: 30px;
				background: #f2fbff;
				border: 1px dashed #b6bcbf;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}
			.dd-empty {
				border: 1px dashed #bbb;
				min-height: 100px;
				background-color: #e5e5e5;
				background-image: -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
				background-image: -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
				background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
				background-size: 60px 60px;
				background-position: 0 0, 30px 30px;
			}

			.dd-dragel {
				position: absolute;
				pointer-events: none;
				z-index: 9999;
			}
			.dd-dragel > .dd-item .dd-handle {
				margin-top: 0;
			}
			.dd-dragel .dd-handle {
				-webkit-box-shadow: 2px 4px 6px 0 rgba(0,0,0,.1);
				box-shadow: 2px 4px 6px 0 rgba(0,0,0,.1);
			}

			/**
			 * Nestable Extras
			 */

			.nestable-lists {
				display: block;
				clear: both;
				padding: 30px 0;
				width: 100%;
				border: 0;
				border-top: 2px solid #ddd;
				border-bottom: 2px solid #ddd;
			}

			#nestable-menu {
				padding: 0;
				margin: 20px 0;
			}

			#nestable-output, #nestable2-output {
				width: 100%;
				height: 7em;
				font-size: 0.75em;
				line-height: 1.333333em;
				font-family: Consolas, monospace;
				padding: 5px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#nestable2 .dd-handle {
				color: #fff;
				border: 1px solid #999;
				background: #bbb;
				background: -webkit-linear-gradient(top, #bbb 0%, #999 100%);
				background: -moz-linear-gradient(top, #bbb 0%, #999 100%);
				background: linear-gradient(top, #bbb 0%, #999 100%);
			}
			#nestable2 .dd-handle:hover {
				background: #bbb;
			}
			#nestable2 .dd-item > button:before {
				color: #fff;
			}

			@media only screen and (min-width: 700px) {

				.dd {
					float: left;
					width: 100%;
				}
				.dd + .dd {
					margin-left: 2%;
				}

			}

			.dd-hover > .dd-handle {
				background: #2ea8e5 !important;
			}

			/**
			 * Nestable Draggable Handles
			 */

			.dd3-content {
				display: block;
				height: 30px;
				margin: 5px 0;
				padding: 5px 10px 5px 40px;
				color: #333;
				text-decoration: none;
				font-weight: bold;
				border: 1px solid #ccc;
				background: #fafafa;
				background: -webkit-linear-gradient(top, #fafafa 0%, #eee 100%);
				background: -moz-linear-gradient(top, #fafafa 0%, #eee 100%);
				background: linear-gradient(top, #fafafa 0%, #eee 100%);
				-webkit-border-radius: 3px;
				border-radius: 3px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}
			.dd3-content:hover {
				color: #2ea8e5;
				background: #fff;
			}

			.dd-dragel > .dd3-item > .dd3-content {
				margin: 0;
			}

			.dd3-item > button {
				margin-left: 30px;
			}

			.dd3-handle {
				position: absolute;
				margin: 0;
				left: 0;
				top: 0;
				cursor: pointer;
				width: 30px;
				text-indent: 100%;
				white-space: nowrap;
				overflow: hidden;
				border: 1px solid #aaa;
				background: #ddd;
				background: -webkit-linear-gradient(top, #ddd 0%, #bbb 100%);
				background: -moz-linear-gradient(top, #ddd 0%, #bbb 100%);
				background: linear-gradient(top, #ddd 0%, #bbb 100%);
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.dd3-handle:before {
				content: '≡';
				display: block;
				position: absolute;
				left: 0;
				top: 3px;
				width: 100%;
				text-align: center;
				text-indent: 0;
				color: #fff;
				font-size: 20px;
				font-weight: normal;
			}
			.dd3-handle:hover {
				background: #ddd;
			}

		</style>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

	</head>
	<body>
		<style>
			.deleteboton {
				float: right;
				margin-right: 10px;
			}
		</style>

		<?php
		function generarmenu($menus) {

			$html = '';

			foreach ($menus as $menu) {
				$html .= '<li id="menuitem_' . $menu['id'] . '" class="dd-item"  data-classes="' . $menu['class'] . '" data-sort="' . $menu['sort'] . '" data-link="' . $menu['link'] . '" data-parent="' . $menu['parent'] . '"  data-label="' . $menu['label'] . '" data-id="' . $menu['id'] . '">';
				$html .= '<div  class="dd-handle dd3-handle">Drag</div><div class="dd3-content"><span id="labelid_' . $menu['id'] . '">' . $menu['label'] . '</span> <button class="deleteboton btn btn-danger btn-xs" onclick="deletemenu(' . $menu['id'] . ')">Delete</button> <button class="deleteboton btn btn-warning btn-xs" onclick="editmenu(' . $menu['id'] . ')">Edit</button></div>';
				if (isset($menu["hijos"])) {
					$html .= '<ol class="dd-list">';
					$html .= generarmenu($menu["hijos"]);
					$html .= '</ol>';
				}
				$html .= '</li>';

			}

			return $html;
		}
		?>

		<div class="modal fade" id="modaledit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="titulomodal"></h4>
					</div>
					<div class="modal-body">
						<form id="sendform" action="{{route('updatemenus')}}" method="post">
							<div class="form-group">
								<label for="label">Label</label>
								<input type="text" class="form-control" required="required" id="label" name="label" placeholder="Label">

								<input type="hidden" class="form-control"  id="idlabel" name="id" >

							</div>
							<div class="form-group">
								<label for="label">Link</label>
								<input type="text" class="form-control"  id="link" name="link" placeholder="Link">

							</div>
							<div class="form-group">
								<label for="label">Class</label>
								<input type="text" class="form-control"  id="class" name="class" placeholder="Class">

							</div>

							<div class="form-group" id="menuresponse"></div>

							<button type="submit" class="btn btn-default">
								Submit
							</button>
						</form>
					</div>

				</div>
			</div>
		</div>

		<div class="row" style="text-align: center">
			<button class="btn btn-success" onclick="createmenu()">
				Create Menu
			</button>
		</div>

		<div class="cf nestable-lists">

			<div class="dd" id="nestable">
				<ol class="dd-list">
					{{generarmenu($menus)}}

				</ol>
			</div>

		</div>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
		<script src="http://malsup.github.com/jquery.form.js"></script>

		<script src="{{ URL::asset('jquery.nestable.js') }}"></script>
		<script>
			var datos = [];

			function getAllMenus(id) {
				$.ajax({
				dataType : "text",
				data:{parent:id,menu:{{Input::
				get('m')
			}}}, url : "{{route('getallmenus')}}",
			type: 'GET',
			beforeSend : function(e) {
				$("#menuresponse").html("");
			}, success : function(response) {
				$("#menuresponse").html(response);
			}
			});

			}
			function createmenu() {
				getAllMenus();
				$("#label").val("");
				$("#class").val("");
				$("#link").val("");
				$("#idlabel").val(0);
				$('#modaledit').modal('show')
				$("#parentselect").val(0); 

			}

			function editmenu(id) {
				var label = $("#menuitem_" + id).data("label")
				var id = $("#menuitem_" + id).data("id")
				var link = $("#menuitem_" + id).data("link")
				var classes = $("#menuitem_" + id).data("classes")
				var parent = $("#menuitem_" + id).data("parent")
				getAllMenus(parent);
				$("#parentselect").val(parent);
				$("#label").val(label);
				$("#link").val(link);
				$("#class").val(classes);

				$("#idlabel").val(id);

				$("#titulomodal").html("Menu - " + label)
				$('#modaledit').modal('show')
			}

			function deletemenu(id) {
				var r = confirm("do you want to delete this record?");
				if (r == true) {
					$.ajax({
						data : {
							id : id
						},
						dataType : "text",
						url : "{{route('menudeletepost')}}",
						type : 'post',

						success : function(response) {
							var json = JSON.parse(response);
							if (json.error == 1) {
								alert(json.resp)
								return false;
							} else {
								console.log("#menuitem_" + id)
								$("#menuitem_" + id).remove();
							}
						}
					});
				}

			}

			function enviardatosmenu() {
				var parametros = {
					"jsondata" : datos,
				};
				var datsstring = JSON.stringify(datos);
				$.ajax({
					data : parametros,
					dataType : "text",
					url : "{{route('menupost')}}",
					type : 'post',
					beforeSend : function() {
						$("#resultado").html("Procesando, espere por favor...");
					},
					success : function(response) {
						$("#resultado").html(response);
					}
				});
			}


			$(document).ready(function() {
				$('#sendform').ajaxForm({
					success : function() {
						$("#label").val("")
						$("#idlabel").val(0)
						$("#link").val("")
						$("#class").val("")
						$('#modaledit').modal('hide')
					}
				});

				function collapse() {
					$('.dd').nestable('collapseAll');
				}

				function popular(jsonnomal) {
					var contador = 0;
					var dataarray = [];
					for (var i = 0; i < jsonnomal.length; i++) {
						contador++;
						dataarray[i] = {
							id : jsonnomal[i].id,
							label : jsonnomal[i].label,
							class : jsonnomal[i].classes,

							link : jsonnomal[i].link,
							sort : contador
						};
						if (!!jsonnomal[i].children) {
							var datod = popular(jsonnomal[i].children);
							dataarray[i]["hijos"] = datod
						}
					}

					return dataarray;
				}

				var updateOutput = function(e) {
					var list = e.length ? e : $(e.target), output = list.data('output');
					if (window.JSON) {
						var jsonnomal = list.nestable('serialize');
						var contador = 0;
						var jsondata = popular(jsonnomal);
						datos = jsondata;
						enviardatosmenu()
					} else {
						output.val('JSON browser support required for this demo.');
					}
				};

		
				$('#nestable').nestable({
					group : 1
				}).on('change', updateOutput);

				updateOutput($('#nestable').data('output', $('#nestable2-output')));
				$('#nestable-menu').on('click', function(e) {
					var target = $(e.target), action = target.data('action');
					if (action === 'expand-all') {
						$('.dd').nestable('expandAll');
					}
					if (action === 'collapse-all') {
						$('.dd').nestable('collapseAll');
					}
				});

				$('#nestable3').nestable();

			});
		</script>
	</body>
</html>