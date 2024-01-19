export function Card(
  width,
  height,
  backgroundColor,
  borderRadius,
  content,
  heading_color
) {
  const main_container = document.getElementsByTagName("main");
  const container = document.createElement("div");
  main_container[0].appendChild(container);
  const heading = document.createElement("h1");
  const button = document.createElement('button');
  button.textContent = 'click'
  heading.textContent = content;
  heading.style.color = heading_color;
  container.appendChild(heading);
  container.appendChild(button)

  container.style.width = width;
  container.style.height = height;
  container.style.backgroundColor = backgroundColor;
  container.style.borderRadius = borderRadius;
}