$(document).ready(function () {
    $('tbody tr').each(function (i, ele) {
        
        var sharesOwned = parseFloat($(ele).children('.shares').text());
        var marketPrice = parseFloat($(ele).children('.marketPrice').text());
        // market value is number of shares times market price per share
        var marketValue = sharesOwned * marketPrice;
        console.log(marketValue);
    });
  });
  
  // Feetbook
  // Yamazon
  // Snoozechat