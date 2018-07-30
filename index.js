const XeroClient = require('xero-node').AccountingAPIClient;
const config = require('./config.json');

(async () => {

    const bill = {
        "Type": "ACCREC",
        "Contact": { 
            "Name": "Dwiki Arlan" 
          },
        "Date": "2018-06-25T00:00:00",
        "DueDate": "2018-07-02T00:00:00",
        "LineAmountTypes": "Exclusive",
        "LineItems": [
          {
            "Description": "Consulting services as agreed (20% off standard rate)",
            "Quantity": "10",
            "UnitAmount": "100.00",
            "AccountCode": "200",
            "DiscountRate": "20"
          }
        ]
      }

    // You can initialise Private apps directly from your configuration
    let xero = new XeroClient(config);

    // const result = await xero.invoices.get();
    const result = await xero.invoices.create(bill).then((res) => {
    console.log('​res', res);
    }).catch((err) => {
    console.log('​}).catch -> err', err);
    })

    // console.log('Number of invoices:', result.Invoices.length);

})();