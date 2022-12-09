namespace ToDoList.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public string ListId { get; set; }
        public Boolean done { get; set; }
    }
}
