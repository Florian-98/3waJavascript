<?php if(!empty($order)) : ?>


  <tr>
    <th scope="row"></th>
    <td class="text-success"><?= $order['orderNumber']; ?></td>
    <td><?= $order['orderDate']; ?></td>
    <td><?= $order['requiredDate']; ?></td>
    <td><?= $order['shippedDate']; ?></td>
    <td><?= $order['status']; ?></td>
    <td class="text-info"><?= $order['comments']; ?></td>

    <?php if(!$_SERVER['QUERY_STRING']) : ?>
      <td><a href="?orderNumber=<?= $order['orderNumber'] ?>" class="btn btn-primary">Voir plus</a></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"><?= $order2['customerName']; ?> </td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['customerNumber']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['contactLastName']; $order2['contactFirstName']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['addressLine1']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['city']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['country']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['productCode']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['quantityOrdered']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['priceEach']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['TotalHT']; ?></td>
    <?php endif ?>
    <?php if($_SERVER['QUERY_STRING']) : ?>
      <td scope="col"> <?= $order2['MontantTVA']; ?></td>
    <?php endif ?>
  </tr>

<?php else : ?>
    <p> No task to show yet </p>
<?php endif ?>
