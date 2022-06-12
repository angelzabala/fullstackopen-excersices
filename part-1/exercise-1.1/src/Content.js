export const Content = (props) => {
  return (
    <>
      <p>
        {props.content.part1.name} {props.content.part1.exercises}
      </p>
      <p>
        {props.content.part2.name} {props.content.part2.exercises}
      </p>
      <p>
        {props.content.part3.name} {props.content.part3.exercises}
      </p>
    </>
  );
};
