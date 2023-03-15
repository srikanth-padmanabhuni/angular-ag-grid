export const simpleGrid = {
    columnDefs: [
        { field: 'id', editable: false },
        { field: 'make', editable: true },
        { field: 'model', editable: true },
        { field: 'price', editable: true }
    ],
    rowData: [
        { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
        { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id: 3, make: 'Porsche', model: 'Boxster', price: 72000 }
    ]
}