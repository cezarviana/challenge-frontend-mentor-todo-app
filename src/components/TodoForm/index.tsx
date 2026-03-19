const TodoForm = () => {
    return (
        <form className='relative mb-10'>
            <span className='absolute w-6 h-6 border border-dark-purple-700 top-1/2 -translate-y-1/2 rounded-full left-6'></span>

            <input type="text" placeholder='Create a new todo...' name='todo' className='bg-dark-navy-900 w-full text-light-gray-50 text-lg rounded-md py-6 pl-16 outline-none' />
        </form>
    )
};

export default TodoForm;