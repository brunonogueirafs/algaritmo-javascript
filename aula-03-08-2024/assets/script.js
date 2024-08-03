const productsListTable = document.getElementById("products-list");

const tablebody = document.createElement("tbody");
const tableRow = document.createElement("tr");

const tableCellId = document.createElement("td");
tableCellId.innerText = 1;
tableRow.appendChild(tableCellId);

const tableCellProduct = document.createElement('td');
tableCellProduct.innerText = "tênis jordan air"
tableRow.appendChild(tableCellProduct);

const tableCellBrand = document.createElement('td');
tableCellBrand.innerText = "nike"
tableRow.appendChild(tableCellBrand);

const tableCellStock = document.createElement('td');
tableCellStock.innerText = "380"
tableRow.appendChild(tableCellStock);

const tableCellPrice = document.createElement('td');
tableCellPrice.innerText = "340.89"
tableRow.appendChild(tableCellPrice);

const tableCellVenda = document.createElement('td');
tableCellVenda.innerText = "1.999"
tableRow.appendChild(tableCellVenda);

const tableCellAction = document.createElement('td');

const tablebEditButton = document.createElement('Button');
tablebEditButton.innerText = "Editar"
tablebEditButton.setAttribute("class","btn");
tablebEditButton.classList.add("btn-success");

tableCellAction.append(tablebEditButton);

tableRow.appendChild(tableCellAction);




tablebody.appendChild(tableRow);
productsListTable.appendChild(tablebody);
