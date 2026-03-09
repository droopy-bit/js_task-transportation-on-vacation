/**
 * @param {number} days
 *
 * @return {number}
 */
const WEEK_RENTAL_DAYS = 7;
const WEEK_RENTAL_PRICE = 230;

const SIX_DAY_RENTAL_DAYS = 6;
const SIX_DAY_RENTAL_PRICE = 220;

const THREE_DAY_RENTAL_DAYS = 3;
const THREE_DAY_RENTAL_PRICE = 100;

const DEFAULT_RENTAL_PRICE = 80;

function calculateRentalCost(numberOfDays) {
  if (numberOfDays === WEEK_RENTAL_DAYS) {
    return WEEK_RENTAL_PRICE;
  }

  if (numberOfDays === SIX_DAY_RENTAL_DAYS) {
    return SIX_DAY_RENTAL_PRICE;
  }

  if (numberOfDays === THREE_DAY_RENTAL_DAYS) {
    return THREE_DAY_RENTAL_PRICE;
  }

  return DEFAULT_RENTAL_PRICE;
}

module.exports = calculateRentalCost;
