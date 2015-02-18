<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Bootstrap 101 Template</title>
		<!-- Bootstrap -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<script src="//cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>
	</head>
	<body>
		<script>
			var idwidget = 0;
			function createwidget() {
				idwidget = 0;
				$("#idwidget").val(idwidget)
				$("#myModal").modal("show")
			}

			function editwidget(id) {
				idwidget = 0;
				$.ajax({
					data : {
						id : id
					},
					dataType : "json",
					url : "{{route('getwidgetinformation')}}",
					type : 'post',

					success : function(response) {
						idwidget = id;
						$("#idwidget").val(idwidget)

						$("#name").val(response.name);
						CKEDITOR.instances["widgeteditor"].setData(response.description)

					}
				});

				$("#myModal").modal("show")
			}
		</script>
		<div class="container">
			<div class="row" style="text-align: center;margin-top: 40px;margin-bottom: 40px">
				@if(Input::has("resp"))
				<div class="well">
					{{Input::get("resp")}}
				</div>
				@endif
				<button class="btn btn-default" onclick="createwidget()">
					Create widget
				</button>
			</div>
			<div class="bs-example" data-example-id="bordered-table">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th class="col-lg-1">#</th>
							<th class="col-lg-8">Name</th>
							<th class="col-lg-3"></th>
						</tr>
					</thead>
					<tbody>
						@foreach($widgets as $m)
						<tr>
							<th scope="row">{{$m->id}}</th>
							<td>{{$m->name}}</td>
							<th><a  onclick="editwidget({{$m->id}})"  class="btn btn-info">Edit</a><a  href="{{route('deletewidget',array('id'=>$m->id))}}"  class="btn btn-danger">Delete</a></th>
						</tr>
						@endforeach
					</tbody>
				</table>
			</div>
		</div>
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<form action="{{route('createwidget')}}" method="post">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title" id="myModalLabel">Widget</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label for="exampleInputPassword1">Name</label>
								<input type="text" id="name" name="name" class="form-control"   placeholder="Name">
								<input type="hidden" name="idwidget" id="idwidget" />
							</div>

							<div class="form-group">
								<textarea name="widgeteditor" id="widgeteditor" rows="10" cols="80"></textarea>
							</div>

						</div>

						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">
								Close
							</button>
							<button type="submit" class="btn btn-primary">
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

		<script>
			CKEDITOR.replace('widgeteditor');
		</script>
	</body>
</html>