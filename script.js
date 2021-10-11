  var updateMarketValue = function (ele) {
    var sharesOwned = parseFloat($(ele).children('.shares').text());
    var marketPrice = parseFloat($(ele).children('.marketPrice').text());
  
    // market value is shares times market price per share
    var marketValue = sharesOwned * marketPrice;
    $(ele).children('.marketValue').html(marketValue);
  
    return marketValue;
  }
  
  var updateUnrealizedProfit = function (ele, marketValue) {
    var sharesOwned = parseFloat($(ele).children('.shares').text());
    var costPerShare = parseFloat($(ele).children('.cost').text());
    var costOfPurchase = sharesOwned * costPerShare;
  
    // unrealized profit is market value minus cost of purchase
    var unrealizedProfit = marketValue - costOfPurchase;
    $(ele).children('.profit').html(unrealizedProfit);
  
    return unrealizedProfit;
  }

  var sum = function (acc, x) { return acc + x; };
  
  var updatePortfolioValueAndProfit = function () {
    var stocksMarketValues = [];
    var stocksUnrealizedProfits = [];
    $('tbody tr').each(function (i, ele) {
      var marketValue = updateMarketValue(ele);
      stocksMarketValues.push(marketValue);
      var unrealizedProfit = updateUnrealizedProfit(ele, marketValue);
      stocksUnrealizedProfits.push(unrealizedProfit);
    });
    var portfolioMarketValue = stocksMarketValues.reduce(sum);
    var portfolioUnrealizedProfit = stocksUnrealizedProfits.reduce(sum);
    $('#portfolioValue').html(portfolioMarketValue);
    $('#portfolioProfit').html(portfolioUnrealizedProfit);
  }

  $(document).ready(function () {
    updatePortfolioValueAndProfit();

    $('.btn.remove').on('click', function (event) {
        $(this).closest('tr').remove();
        // $(this).parent().parent().remove();
        // The above also works
        updatePortfolioValueAndProfit();
    });
  });
  
  // Feetbook
  // Yamazon
  // Snoozechat