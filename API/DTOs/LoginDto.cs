namespace API.DTOs
{
    public record LoginDto
    {
        public string UserName { get; init; }
        public string Password { get; init; }
    }
}