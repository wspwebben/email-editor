export default function camelize(source) {
  return source
    .split("-")
    .map((token, index) =>
      index
        ? token.charAt(0).toUpperCase() + token.slice(1).toLowerCase()
        : token.toLowerCase()
    )
    .join("");
}
