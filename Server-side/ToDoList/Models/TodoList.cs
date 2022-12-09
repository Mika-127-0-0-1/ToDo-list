namespace ToDoList.Models
{
    public class TodoList
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Items { get; set; }
        public string FileName { get; set; }
}
}
