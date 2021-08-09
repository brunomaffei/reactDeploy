import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard/>", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.cover
    );
    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(screen.getByText("body 1")).toBeInTheDocument();
  });

  // Snapshot é interessante pra quando você não for mexer mais no código e for passar para produção
  // Se algo for mexido ele vai fazer a comparação com o primeiro snapshot que foi tirado
  // Interessante sempre que preciso tirar um snapshot do que ele está testando;

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
