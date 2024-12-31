
public class Role
{
	public Int32 RoleId { get; set; }
	public String Name { get; set; }
	public Feature[] Features { get; set; }
}

public class Feature
{
	public Int32 FeatureId { get; set; }
	public String Name { get; set; }
	public String ModuleName { get; set; }
}

