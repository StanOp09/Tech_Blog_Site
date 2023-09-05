module.exports = {
    // Define custom Handlebars helper(s)
    format_date: (date) => {
      // Format a date using the built-in JavaScript Date object methods
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
  };
  