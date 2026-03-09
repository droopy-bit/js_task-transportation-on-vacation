const DAILY_RATE = 40;

const WEEK_RENTAL_DAYS = 7;
const WEEK_RENTAL_DISCOUNT = 50;

const SIX_DAY_RENTAL_DAYS = 6;
const SIX_DAY_RENTAL_DISCOUNT = 20;

const THREE_DAY_RENTAL_DAYS = 3;
const THREE_DAY_RENTAL_DISCOUNT = 20;

/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const baseCost = numberOfDays * DAILY_RATE;

  if (numberOfDays >= WEEK_RENTAL_DAYS) {
    return baseCost - WEEK_RENTAL_DISCOUNT;
  }

  if (numberOfDays >= SIX_DAY_RENTAL_DAYS) {
    return baseCost - SIX_DAY_RENTAL_DISCOUNT;
  }

  if (numberOfDays >= THREE_DAY_RENTAL_DAYS) {
    return baseCost - THREE_DAY_RENTAL_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
