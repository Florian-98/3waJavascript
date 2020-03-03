<?php

include('requests/gettasks.php');
include('views/includes/debuttable.php');

foreach($result1 as $order) {
  include('views/includes/task.view.php');
}
include('views/includes/fintable.php');
