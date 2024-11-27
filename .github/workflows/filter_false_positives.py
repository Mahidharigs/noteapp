import json

with open("zap_results.json") as file:
    results = json.load(file)

filtered_alerts = [
    alert for alert in results['alerts']
    if alert['pluginId'] not in {"10035"}  # Add plugin IDs to exclude
]

with open("filtered_results.json", "w") as file:
    json.dump({"alerts": filtered_alerts}, file, indent=2)
