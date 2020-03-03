<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ClassicModels</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css" media="screen">
</head>
<body>
    <section >
            <?php if(array_key_exists('orderNumber', $_GET)) : ?>
              <?php include('views/uniqueorder.php'); ?>
            <?php else : ?>
              <?php include('views/includes/tasklist.view.php'); ?>
            <?php endif ?>
        </section>

</body>
</html>
