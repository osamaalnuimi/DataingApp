

namespace API.DTOs
{
    public record UserDto
    {
        public string UserName { get; init; }
        public string TokenKey { get; init; }
        public string PhotoUrl { get; set; }
        public string KnownAs { get; set; }

        public string Gender { get; set; }
    }

}