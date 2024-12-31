namespace WebService.Services.Controllers;

using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class RoleController : ControllerBase
{
	[HttpGet(Name = "GetRole")]
	public async Task<IActionResult> GetAsync(String? roleName)
	{
		var content = await System.IO.File.ReadAllTextAsync("Data/role.json");
		var roles = System.Text.Json.JsonSerializer.Deserialize<List<Role>>(content);

		IEnumerable<Role>? result = null;

		if (String.IsNullOrEmpty(roleName))
			result = roles;
		else
			result = roles!.Where(m => m.Name.Equals(roleName)).ToList();

		if (result!.Count() >= 0)
		{
			content = await System.IO.File.ReadAllTextAsync("Data/features.json");
			var features = System.Text.Json.JsonSerializer.Deserialize<List<Feature>>(content);

			foreach (var role in result!)
			{
				foreach (var feature in role.Features)
				{
					var f = features!.Where(m => m.FeatureId == feature.FeatureId).FirstOrDefault();
					feature.Name = f.Name;
					feature.ModuleName = f.ModuleName;
				}
			}
		}

		return Ok(result);
	}
}
