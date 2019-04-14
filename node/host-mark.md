# Host用户标记

这里Host用户标记主要用来针对ws+ss的时候通过单端口来实现用户的内部分流用

这里获得的host值，填在ws设定中的Headers:{Host:获取的值}

需要配置如下：

```text
"mu_regex":  "%5m.%suffix", /5m 代表取前5个md5值
"mu_suffix": "microsoft.com",
```

函数定义如下:

```text
func getMD5(data string) string {
	md5Ctx := md5.New()
	md5Ctx.Write([]byte(data))
	cipherStr := md5Ctx.Sum(nil)
	current_md5 := hex.EncodeToString(cipherStr)
	return current_md5
}
md5:= getMD5(fmt.Sprintf("%s%s%s", user.Email, user.Passwd, user.Method))
func getMuHost(md5 string, MU_REGEX string, MU_SUFFIX string) string {
	regex_text := MU_REGEX
	regex_text = strings.Replace(regex_text, "%suffix", MU_SUFFIX, -1)
	regex := regexp.MustCompile(`%-?[1-9]\d*m`)
	for _, item := range regex.FindAllString(regex_text, -1) {
		regex_num := strings.Replace(item, "%", "", -1)
		regex_num = strings.Replace(regex_num, "m", "", -1)
		md5_length, _ := strconv.ParseInt(regex_num, 10, 0)
		if md5_length < 0 {
			regex_text = strings.Replace(regex_text, item, md5[32+md5_length:], -1)
		} else {
			regex_text = strings.Replace(regex_text, item, md5[:md5_length], -1)
		}
	}
	return regex_text
}
```



