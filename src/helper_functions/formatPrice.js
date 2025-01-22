export const formatPrice = (price) => {
  if (price >= 1_000_000) {
    const millionPart = Math.floor(price / 1_000_000);
    const thousandPart = Math.round((price % 1_000_000) / 1_000);
    return `${new Intl.NumberFormat("fa-IR").format(millionPart)} میلیون ${new Intl.NumberFormat("fa-IR").format(thousandPart)} هزار تومان`;
  } else {
    return `${new Intl.NumberFormat("fa-IR").format(Math.round(price / 1_000))} هزار تومان`;
  }
};
