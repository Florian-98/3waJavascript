<?php

function sendGetResponse() {
 $results = ['results'  =>[
                          'status' => true,
                          'gethtmldata' => $_GET['query'],
                          'getjsondata' => $_GET['query'],
                          'getmovies' => $_GET['query']

                          ]
                      ];
    header("Content-type: application/json; charset=utf-8");

    echo json_encode($results);
}


  sendGetResponse();






























 ?>
