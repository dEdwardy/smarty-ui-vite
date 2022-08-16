import { defineComponent,PropType,toRefs} from "vue";
import "uno.css";

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'red'  // 设定默认颜色
  },
}
export default defineComponent({
  name: "TSXButton",
  props,
  setup(props, {slots}) {
    return () => <button 
      class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      `}
        > 
        {slots.default ? slots.default() : ''}
     </button>
  }
});