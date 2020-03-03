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
      <td scope="col"> nom du client </td>
    <?php endif ?>
  </tr>

<?php else : ?>
    <p> No task to show yet </p>
<?php endif ?>
