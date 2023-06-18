

namespace API.DTOs
{
    public record UserDto
    {
        public string UserName { get; init; }
        public string TokenKey { get; init; }
    }

}