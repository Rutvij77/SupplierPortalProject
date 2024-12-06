﻿$(document).ready(function () {
    loadDataTable();
})

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/customer/customer/getallorders' },
        "columns": [
            { data: 'product.productName' },
            { data: 'product.companyName' },
            { data: 'product.productCategory' },
            {
                data: 'product.productImage',
                "render": function (data) {
                    return `<img src="${data}" alt="Product Image" style="width: 50%; height: 50%;" />`;
                }
            },
            {
                data: 'product.productPrice',
                "render": function (data) {
                    return `₹ ${data}`;
                }
            },
            { data: 'order.quantity' },
            {
                data: 'order.totalPrice',
                "render": function (data) {
                    return `₹ ${data}`;
                }
            },
            {
                data: 'order.orderDate',
                "render": function (data) {
                    // Parse the date
                    const date = new Date(data);

                    // Extract components
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const hours = String(date.getHours()).padStart(2, '0');
                    const minutes = String(date.getMinutes()).padStart(2, '0');
                    const seconds = String(date.getSeconds()).padStart(2, '0');

                    // Format as 'YYYY-MM-DD hh:mm:ss'
                    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

                    return formattedDate;
                }
            },
            { data: 'order.orderStatus' },
        ]
    });
}
