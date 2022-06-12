import {Part} from './Part';

export const Content = (props) => {
  return (
    <>
      <Part name={props.content.part1.name} exercises={props.content.part1.exercises}/>
      <Part name={props.content.part2.name} exercises={props.content.part2.exercises}/>
      <Part name={props.content.part3.name} exercises={props.content.part3.exercises}/>
    </>
  );
};
