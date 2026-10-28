<!-- English translation of notes.md. Keep section and widget markers. See README.md. -->

<!-- section: s1 -->

## 1. Scientific thinking and the role of statistics

Psychology is an empirical science: it aims to understand human behaviour,
cognition, and emotions through systematic observations and measurements.

Psychological phenomena are complex, and human behaviour varies considerably
across people and situations. Even a real psychological effect may not be
observable in every individual or in every measurement.

::: note
**The purpose of statistics:**

To summarise observed data, estimate population characteristics, and test
scientific hypotheses while taking uncertainty into account.
:::

For example, a researcher might investigate whether sleep deprivation impairs
memory performance. Even if the mean is indeed lower after sleep deprivation,
**they must examine how large the difference is, how variable the data are,
and how compatible the result is with random sampling variation.**

### 1.1. Population and sample

**Population:** the entire set of individuals or observations about which
we want to draw conclusions.

**Sample:** the subset of the population from which we actually collect data.

| Population parameter | Sample statistic |
| --- | --- |
| Expected value (population mean): \(\mu\) | Sample mean: \(\bar{x}\) |
| Standard deviation: \(\sigma\) | Standard deviation: \(s\) |
| Size of a finite population: \(N\) | Sample size: \(n\) |

Population parameters are usually unknown. We estimate them using statistics
calculated from a sample. However, a sample provides only uncertain information
about the entire population.

### 1.2. Descriptive and inferential statistics

**Descriptive statistics:** describing the data actually observed, using measures
such as the mean, standard deviation, and frequencies.

**Inferential statistics (statistical inference):** drawing conclusions about
a population from a sample while taking sampling uncertainty into account.

Descriptive statistics asks:
*What are the observed data like?*

Inferential statistics asks:
*What can the data tell us about the population?*

<!-- section: s2 -->

## 2. Descriptive statistics

In descriptive statistics, **measures of central tendency** describe the centre
of the data, **measures of dispersion** describe variability, and
**measures of shape** describe the shape of the distribution.

### 2.1. Measures of central tendency

#### Mean (arithmetic mean)

The mean is the sum of the observations divided by their number.

::: formula
\[
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i
\]
:::

::: example
**Example:**

2, 4, 4, 6, 9.

\[
\bar{x}=\frac{2+4+4+6+9}{5}=5
\]
:::

The mean takes every observation into account but is sensitive to extreme values.

#### Median

The middle value when the data are arranged in order of magnitude.
In this example, the median is 4. With an even number of observations,
we take the mean of the two middle values. The median is less sensitive
to extreme values.

#### Mode

The most frequently occurring value. Here it is 4.
A distribution may have more than one mode.

### 2.2. Measures of dispersion

Measures of dispersion describe how much observations differ from one another.
Two distributions may have the same mean while differing considerably in dispersion.

{{widget:dispersionChart}}

#### Range

The difference between the largest and smallest values.

::: formula
\[
R=x_{\max}-x_{\min}
\]
:::

In the example, \(9-2=7\). It is easy to calculate but sensitive to extreme observations.

#### Variance

A measure of variability calculated from the squared deviations of observations
from their mean.

::: formula
\[
s^2=\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}
\]
:::

The measure used here, with denominator \(n-1\), is the
**corrected sample variance**, also called the unbiased sample variance.
For independent, identically distributed observations with finite variance,
it is an unbiased estimator of the population variance; it has \(n-1\) degrees of freedom.
The version with denominator \(n\) is the uncorrected sample variance.

#### Standard deviation (SD)

::: formula
\[
s=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}}
\]
:::

The standard deviation is the square root of the variance.
It is expressed in the original units of measurement.
The precise name of \(s\) here is the **corrected sample standard deviation**;
throughout the rest of these notes, we call it the sample standard deviation for short.

#### Interquartile range (IQR)

::: formula
\[
IQR=Q_3-Q_1
\]
:::

The difference between the third and first quartiles.
It describes the spread of the middle 50% of the data
and is less sensitive to outliers.

### 2.3. Measures of shape: skewness and kurtosis

#### Skewness (asymmetry)

**Skewness** describes the asymmetry of a distribution.
It is a **measure of shape** that complements measures of dispersion;
it is quantified using a skewness coefficient.

- **Positive (right) skewness:** the right tail is longer, extending towards large values.
- **Negative (left) skewness:** the left tail is longer, extending towards small values.
- **Zero skewness:** characteristic of symmetric distributions, but does not by itself establish symmetry or normality.

::: example
**Example:** Reaction times are often right-skewed: many responses are relatively
fast, but a few are very slow. On an easy test, many high scores and a few low
scores may produce a left-skewed distribution.
:::

#### Kurtosis

**Kurtosis** is a measure of distribution shape. The **Kurtosis** value in JASP's
descriptive statistics table is the sample-size-adjusted **excess kurtosis**.
We denote it by \(K\). Its theoretical reference value for the normal distribution is 0.


### 2.4. Which measure should we choose?

| Data characteristic | Recommended measure |
| --- | --- |
| Approximately symmetric distribution | Mean and standard deviation |
| Strongly skewed distribution | Median and IQR |
| Categorical variable | Frequency, percentage |
| Describing extreme values | Minimum, maximum, range |

<!-- section: s3 -->

## 3. Probability and random variation

Probability expresses how likely an event is within a given probability model.

- \(P=0\): the probability of the event is zero.
- \(P=0.5\): a probability of 50%.
- \(P=1\): the event occurs with probability 1.

In finite models with equally likely outcomes, 0 corresponds to an impossible
event and 1 to a certain event. In a continuous distribution, the probability
of a particular value may be 0 without that value being impossible.

Probability can be expressed mathematically as follows:

\[
P=\frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}
\]

When a fair coin is tossed, the probability of heads is \(0.5\).
However, ten tosses do not necessarily produce exactly five heads.

This is **random variation**: observed results may differ from expected values
even when the underlying probability remains unchanged.

### 3.1. Random variation in psychology

Reaction times, memory scores, and other psychological measurements vary
between participants and across repeated measurements.

Suppose two populations have the same mean reaction time.
Two randomly selected samples may nevertheless have means of 510 and 520 ms.

::: note
**Important:**

A difference between sample means does not automatically establish a difference
between population means. Inferential statistics addresses this uncertainty.
:::

<!-- section: s4 -->

## 4. The normal distribution and z-scores

### 4.1. The normal distribution

The normal distribution is a symmetric, bell-shaped continuous probability distribution.

Its two parameters are the mean (\(\mu\)), which determines its centre,
and the standard deviation (\(\sigma\)), which determines its width.

{{widget:normalChart}}

For a normal distribution, approximately:

- 68% of values fall within 1 standard deviation of the mean.
- 95% of values fall within 2 standard deviations of the mean.
- 99.7% of values fall within 3 standard deviations of the mean.

Not every psychological variable is normally distributed.
For example, reaction times are often right-skewed.

### 4.2. z-scores

A z-score expresses how many population standard deviations an observation
lies from the mean.

::: formula
\[
z=\frac{x-\mu}{\sigma}
\]
:::

A positive z-score indicates an observation above the mean;
a negative score indicates one below it.

::: example
**Example:**

An intelligence test has a mean of 100 and a standard deviation of 15.
A person scores 130.

\[
z=\frac{130-100}{15}=2
\]

The score is two standard deviations above the mean.
In a normal distribution, approximately 97.7% of values lie below this point.
:::

<!-- section: s5 -->

## 5. Sampling distributions and standard error

### 5.1. What is a sampling distribution?

Suppose the population mean intelligence score is 100.

We randomly select 30 people and calculate their mean.
It might be 103. A second sample might yield 98, and a third 101.

Repeating this thousands of times, always with the same sample size,
and plotting the sample means illustrates **the sampling distribution of the sample mean**.
The theoretical sampling distribution describes the possible values of the sample
mean and their associated probabilities.

::: note
The distribution of observations describes variability between individuals.
The sampling distribution of the sample mean shows how sample means would vary
across repeated samples.
:::

Sampling distribution illustration — falling dots: <https://www.esci-dances.thenewstatistics.com/>

### 5.2. Standard error (SE)

The standard deviation of a statistic's sampling distribution is called its standard error.

For independent, identically distributed observations, the standard error of the mean is:

::: formula
\[
SE_{\bar{x}}=\frac{\sigma}{\sqrt{n}}
\]
:::

Because the population standard deviation is usually unknown,
we estimate the standard error using the sample standard deviation:

::: formula
\[
\widehat{SE}_{\bar{x}}=\frac{s}{\sqrt{n}}
\]
:::

At a fixed sample size, a larger standard deviation produces a larger standard error;
at a fixed standard deviation, a larger sample size produces a smaller standard error.

::: example
**Example:**

The anxiety scores of 100 students have a standard deviation of 20.

\[
\widehat{SE}_{\bar{x}}=\frac{20}{\sqrt{100}}=2
\]

For 400 students, with the same standard deviation:

\[
\widehat{SE}_{\bar{x}}=\frac{20}{\sqrt{400}}=1
\]
:::

{{widget:standard-error}}

### 5.3. The central limit theorem

For independent, identically distributed observations with finite, positive variance,
the sampling distribution of the sample mean can be approximated by a normal
distribution in a large sample, even when the population is not normally distributed.
More precisely, the distribution of the standardised sample mean converges to the
standard normal distribution.

This does not mean that the data themselves become normally distributed.
The theorem concerns the distribution of sample means.

There is no universal sample size, such as \(n=30\), that guarantees an adequate
normal approximation for every population; however, once a certain sample size,
such as \(n=30\), is reached, normality of the sampling distribution may be assumed.

<!-- section: s6 -->

## 6. Scientific hypotheses and NHST

**NHST** stands for *null hypothesis significance testing*.

### 6.1. Scientific and statistical hypotheses

A scientific hypothesis is an explanation or prediction about a phenomenon.

For example: *Sleep deprivation impairs memory performance.*

To investigate this statistically, we formulate hypotheses about population parameters.

#### Null hypothesis (\(H_0\))

Usually states that the population difference or effect under investigation is zero.

::: formula
\[
H_0:\mu_1=\mu_2
\]
:::

#### Alternative hypothesis (\(H_1\))

The competing statement that the population parameter differs
from the value specified by the null hypothesis.

::: formula
\[
H_1:\mu_1\neq\mu_2
\]
:::

### 6.2. One-sided and two-sided hypotheses

**Two-sided hypothesis:** a difference may occur in either direction.

::: formula
\[
H_1:\mu_1\neq\mu_2
\]
:::

**One-sided hypothesis:** the researcher investigates a difference
in a direction specified in advance.

::: formula
\[
H_1:\mu_1<\mu_2
\]
:::

The direction must be chosen and justified before examining the results.
A two-sided test is generally the default.

### 6.3. The steps of NHST

1. Formulate the \(H_0\) and \(H_1\) hypotheses.
2. Choose the significance level (\(\alpha\)) in advance.
3. Calculate the test statistic and p-value.
4. Compare the p-value with \(\alpha\).
5. Reject or do not reject the null hypothesis.

::: note
If \(p\leq\alpha\), reject \(H_0\).<br>

If \(p>\alpha\), do not reject \(H_0\).<br>

NHST does not directly calculate the probability that \(H_0\) or \(H_1\) is true.
:::

<!-- section: s7 -->

## 7. Test statistics, z-values, and t-values

### 7.1. Test statistic

A test statistic (e.g. a t-value, z-value, or Pearson's r) expresses how far
the observed estimate differs from the value specified by the null hypothesis
(the hypothesised value), relative to the uncertainty of the estimate.

::: formula
\[
\text{Test statistic}
=
\frac{\text{Observed estimate}-\text{Hypothesised value}}
{\text{Standard error}}
\]
:::

A 10-point difference is more extreme with a standard error of 2 points
than with a standard error of 20 points.

### 7.2. z-test statistic (u-test)

With a known population standard deviation and a normally distributed population,
we can use a z-test to investigate the expected value.
Hungarian teaching materials often call this a **u-test**.
In large samples, it can also be used as an approximate procedure under appropriate conditions.

::: formula
\[
z=\frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}
\]
:::

A z-test statistic of 2 means that the sample mean is two standard errors
above the mean specified by the null hypothesis.

This is not the same as an individual z-score: for that score, the denominator
is the population standard deviation; here, it is the standard error of the sample mean.

### 7.3. t-test statistic

In psychological research, the population standard deviation is usually unknown,
so we estimate it from the sample.

::: formula
\[
t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}}
\]
:::

The t-value indicates how many estimated standard errors the observed mean
differs from the mean assumed under the null hypothesis.

### 7.4. The t-distribution

The t-distribution resembles the standard normal distribution but has more
probability mass in its tails (heavier tails): values that are large in absolute
magnitude occur more often. This reflects the additional uncertainty arising
from estimating the population standard deviation.

The shape of the t-distribution depends on its degrees of freedom (\(df\)).
For a one-sample t-test:

::: formula
\[
df=n-1
\]
:::

As the degrees of freedom increase, the t-distribution approaches
the standard normal distribution.

::: note
To determine the p-value, we need the degrees of freedom and whether the test
is one-sided or two-sided, as well as the t-value.
:::

<!-- section: s8 -->

## 8. The p-value and statistical significance

### 8.1. Definition of the p-value

The **p-value** is the probability, assuming that the null hypothesis
and the statistical model are correct, of obtaining a test statistic equal to
or more extreme than the observed value, in the direction or directions
specified by the test.

In other words:

The **p-value** is the probability of obtaining the observed test statistic,
or a more extreme value, assuming that the null hypothesis is true.

A small p-value means that the observed result would be relatively unusual
under the null model (assuming the null hypothesis is true).

### 8.2. What does the p-value not mean?

- \(p=0.03\) does not mean that the probability of the null hypothesis being true is 3%.
- It does not mean that the probability of the alternative hypothesis being true is 97%.
- It does not mean that there is a 3% probability that the result occurred purely by chance.
- It does not indicate the size or practical importance of the effect.

### 8.3. Significance level

The significance level (\(\alpha\)) is a decision threshold specified in advance.
A common choice is \(\alpha=0.05\).

| p-value | Decision at \(\alpha=0.05\) |
| --- | --- |
| 0.003 | Reject \(H_0\) |
| 0.041 | Reject \(H_0\) |
| 0.049 | Reject \(H_0\) |
| 0.051 | Do not reject \(H_0\) |
| 0.300 | Do not reject \(H_0\) |

The 0.05 threshold is a convention. \(p=0.049\) and \(p=0.051\)
represent very similar evidence, even though their conventional classifications differ.

### 8.4. Decisions about the alternative hypothesis

If the p-value is sufficiently small, we reject the null hypothesis
in favour of the specified alternative hypothesis.

If \(p>\alpha\), we do not reject the null hypothesis.
This **does not mean accepting or proving \(H_0\)**.

A non-significant result may reflect a genuinely zero effect,
but it may also result from an insufficient sample size or high measurement variability.

### 8.5. Type I and Type II errors

| Decision | \(H_0\) is true | \(H_0\) is false |
| --- | --- | --- |
| Reject \(H_0\) | Type I error | Correct rejection |
| Do not reject \(H_0\) | Correct decision | Type II error |

**Type I error:** rejecting a true null hypothesis.
For a properly calibrated test, its probability is controlled by \(\alpha\).

**Type II error:** failing to reject a false null hypothesis.
Its probability is denoted by \(\beta\).

**The power of a test**, also called **statistical power**:

::: formula
\[
\text{Power}=1-\beta
\]
:::

The power of a test is the probability of rejecting the null hypothesis
when a specified true effect exists.

A larger sample, lower variability, and a larger true effect generally increase
statistical power.

<!-- section: s9 -->

## 9. The three basic t-tests

The independent-samples t-test is also called the **independent two-sample t-test**.
The paired-samples t-test is also called the **paired t-test** or **dependent-samples t-test**.

All three t-tests compare a mean difference with its estimated standard error.

| Test | Research question | Data structure |
| --- | --- | --- |
| One-sample | Does a mean differ from a reference value? | One sample |
| Independent-samples | Do two population means differ? | Two independent groups |
| Paired-samples | Does the mean within-pair difference differ from zero? | Related measurements |

### 9.1. One-sample t-test

We compare a population mean with a specified reference value.

::: example
**Example:**

A memory test has a reference mean of 100 points.
A sample of 25 people has a mean of 106 and a standard deviation of 12.

\[
H_0:\mu=100
\]

\[
H_1:\mu\neq100
\]

::: formula
\[
t=\frac{106-100}{12/\sqrt{25}}=2.50
\]
:::

\[
df=25-1=24
\]

**Result:**

\(t(24)=2.50,\quad p\approx0.020\).
:::

Because \(p<0.05\), we reject \(H_0\).
We found statistically significant evidence that the population mean differs from 100.

### 9.2. Independent-samples t-test

We compare the population means of two independent groups.

::: example
**Example:**

The attentional performance of a mindfulness-training group and a control group.

|  | Training | Control |
| --- | --- | --- |
| \(n\) | 25 | 25 |
| Mean | 80 | 70 |
| SD | 15 | 15 |

\[
H_0:\mu_1-\mu_2=0
\]

\[
H_1:\mu_1-\mu_2\neq0
\]
:::

Student's independent-samples t-test uses a pooled standard deviation:

::: formula
\[
s_p=
\sqrt{
\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}
{n_1+n_2-2}
}
\]
:::

::: formula
\[
t=
\frac{\bar{x}_1-\bar{x}_2}
{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}
\]
:::

In the example, the pooled standard deviation is 15,
and the standard error of the difference is approximately 4.24.

::: formula
\[
t=
\frac{80-70}
{15\sqrt{\frac{1}{25}+\frac{1}{25}}}
\approx2.36
\]
:::

The degrees of freedom are:

::: formula
\[
df=n_1+n_2-2=48
\]
:::

**Result:**
\(t(48)=2.36,\quad p\approx0.022\).

We reject \(H_0\). There is a significant difference between
the groups' mean attentional performance.

A significant difference alone does not establish causation.
The research design must also be taken into account.

#### Student's and Welch's t-tests

Student's version assumes equal population variances (**homogeneity of variance**).
Welch's version does not require this assumption and is therefore often
a preferable default choice.

::: formula
\[
t_{\mathrm{Welch}}=
\frac{\bar{x}_1-\bar{x}_2}
{\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}}
\]
:::

Welch's test uses adjusted degrees of freedom.

### 9.3. Paired-samples t-test

We compare related observations, such as the same individuals' scores
before and after an intervention.

::: example
**Example:**

We measure the anxiety of 16 participants before and after an intervention.

We define the difference scores as:

\[
d_i=x_{i,\text{before}}-x_{i,\text{after}}
\]

Mean difference: 4 points.<br>
Standard deviation of the difference scores: 6 points.

\[
H_0:\mu_d=0
\]

\[
H_1:\mu_d\neq0
\]

::: formula
\[
t=\frac{\bar{d}}{s_d/\sqrt{n}}
=\frac{4}{6/\sqrt{16}}
\approx2.67
\]
:::

\[
df=16-1=15
\]

**Result:**

\(t(15)=2.67,\quad p\approx0.018\).
:::

We reject \(H_0\). The mean difference between the measurements
before and after the intervention is statistically significant.

::: note
**An important connection:**

Mathematically, a paired-samples t-test is a one-sample t-test
performed on the pairs' difference scores.
:::

<!-- section: s10 -->

## 10. Assumptions of t-tests

The validity of t-tests depends on whether the statistical model's assumptions hold.

| Test | Important assumptions |
| --- | --- |
| One-sample | Independent observations; a normally distributed population for exact small-sample inference. |
| Independent-samples | Independent observations; within-group normality for small-sample inference; Student's version also requires homogeneity of variance. Welch's degrees of freedom are determined using an approximation. |
| Paired-samples | Independent pairs; meaningful pairing; normally distributed difference scores for exact small-sample inference. |

The tests may be sensitive to extreme outliers, particularly in small samples.

For the paired-samples t-test, the normality assumption concerns the difference
scores, not necessarily the raw measurements.

t-tests are often robust to moderate violations of normality,
but strong skewness, outliers, and dependent observations may threaten their validity.

### 10.1. When normality is violated: the Mann–Whitney test

When comparing two **independent groups**, if normality is substantially violated,
particularly in a small sample, the **Mann–Whitney U test** may be considered
instead of the independent-samples t-test. This is a nonparametric, rank-based
procedure that does not assume normality. It does, however, require independent
observations and at least an ordinal level of measurement.

The test ranks the two groups' values together. It does not directly test
differences between means. For distributions with the same shape that differ
only by a location shift, it can also be interpreted in terms of a difference
between medians. With different distribution shapes, a significant result
does not necessarily indicate a difference between medians.

::: note
The Mann–Whitney test applies to **independent samples**, so it does not replace
the paired-samples t-test. For related measurements, another procedure,
such as the Wilcoxon signed-rank test under appropriate conditions, may be suitable.
A minor violation of normality does not automatically require replacing the t-test;
sample size, outliers, and the research question must also be considered.
:::

<!-- section: s11 -->

## 11. Effect sizes and confidence intervals

The Hungarian terms **hatásméret** and **hatásnagyság** both mean **effect size**.
**Konfidenciaintervallum** and **megbízhatósági intervallum** both mean **confidence interval**.

Statistical significance is not the same as the size or practical importance of an effect.

In a large sample, even a very small effect may be significant.
In a small sample, a substantial effect may remain non-significant.

### 11.1. Cohen's d

Cohen's d expresses a difference in standard deviation units.

One-sample test:

::: formula
\[
d=\frac{\bar{x}-\mu_0}{s}
\]
:::

Independent samples, using the pooled standard deviation:

::: formula
\[
d=\frac{\bar{x}_1-\bar{x}_2}{s_p}
\]
:::

One common measure for paired samples:

::: formula
\[
d_z=\frac{\bar{d}}{s_d}
\]
:::

| Absolute value of Cohen's d | Conventional interpretation |
| --- | --- |
| 0.20 | Small effect |
| 0.50 | Medium effect |
| 0.80 | Large effect |

These are only rough guidelines, not universal cut-offs.
The sign of the measure indicates the direction of the comparison.

### 11.2. Confidence interval

A confidence interval is an interval estimate of a population parameter.

A 95% t-based confidence interval for a mean:

::: formula
\[
CI_{95\%}=
\bar{x}\pm t_{0.975,df}\,
\widehat{SE}_{\bar{x}}
\]
:::

::: example
**Example:**

Mean = 106, SE = 2.4, \(df=24\), critical \(t\approx2.064\).

\[
106\pm2.064\times2.4
\]

\[
CI_{95\%}=[101.05;\ 110.95]
\]
:::

The interval does not contain the null-hypothesis value of 100,
which is consistent with the two-sided t-test being significant at the 0.05 level.

::: note
A 95% confidence interval is calculated using a procedure that, under appropriate
conditions, contains the true population parameter in 95% of repeated samples.
It does not mean that the particular, fixed parameter has a 95% probability
of falling inside the given interval.
:::

<!-- section: s12 -->

## 12. Which t-test should we choose?

{{widget:test-selector}}

<!-- section: s13 -->

## 13. Reporting statistical results

In psychology, statistical results are reported in APA style.

Reporting a t-test usually involves the means, standard deviations, t-value,
degrees of freedom, p-value, and, where possible, the effect size and confidence interval.

::: example
**Significant result:**

<br>

An independent-samples t-test showed that the training group
(\(M=80,\ SD=15\)) scored significantly higher than the control group
(\(M=70,\ SD=15\)), \(t(48)=2.36,\ p=0.022,\ d=0.67\).
:::

::: example
**Non-significant result:**

<br>

The difference in memory performance between the two groups was not significant,
\(t(48)=1.12,\ p=0.268\).
:::

A non-significant result does not establish the absence of a difference.
Interpretation should also take the uncertainty of the estimate and
the psychological importance of the effect into account.

<!-- section: s14 -->

## 14. Summary of key concepts

| Concept | Definition |
| --- | --- |
| Mean | The arithmetic mean of the observations. |
| Median | The middle value of the ordered data. |
| Mode | The most frequently occurring value. |
| Variance | A measure of dispersion based on squared deviations; the square of the standard deviation. |
| Standard deviation | Variability expressed in the original units of measurement. |
| Corrected sample standard deviation | The square root of the sample variance with denominator \(n-1\); denoted by \(s\) in these notes. |
| Skewness | A measure of distribution asymmetry; positive values indicate a longer right tail and negative values a longer left tail. |
| Kurtosis (JASP Kurtosis) | Sample-size-adjusted excess kurtosis. Under the course rule, values below −2 indicate a flat distribution, values from −2 to +2 indicate approximately normal kurtosis, and values above +2 indicate a peaked distribution. |
| Probability | A number between 0 and 1 assigned to the occurrence of an event within a probability model. |
| Normal distribution | A symmetric, bell-shaped distribution. |
| z-score | Deviation from the mean in standard deviation units. |
| Sampling distribution | The distribution of a statistic across repeated samples. |
| Standard error | The standard deviation of a statistic's sampling distribution. |
| \(H_0\) | The null hypothesis under investigation. |
| \(H_1\) | The alternative hypothesis. |
| t-value | A deviation standardised by its standard error. |
| t-distribution | The reference distribution for t-tests. |
| Degrees of freedom | A quantity that determines the reference distribution. |
| p-value | The probability of a test statistic at least as extreme as the observed value under the null model. |
| Significance level | The upper bound fixed in advance for the probability of a Type I error (\(\alpha\)); the decision threshold compared with the p-value. |
| Type I error | Rejecting a true \(H_0\). |
| Type II error | Failing to reject a false \(H_0\). |
| Power of a test (statistical power) | The probability of rejecting \(H_0\) under a specified alternative; \(1-\beta\). |
| Effect size | A numerical description of the magnitude of an effect. |
| Confidence interval | The result of an interval-estimation procedure whose long-run coverage is specified by the confidence level. |

<!-- section: s15 -->

## 15. Practice questions

Answer the questions, then click “Check answers”.

{{widget:quiz}}

{{widget:gradeBtn}}

{{widget:resetBtn}}

{{widget:quizScore}}

<!-- section: takeaways -->

## Key takeaways

1. Sample statistics are not the same as population parameters.
2. Standard deviation describes variability in observations; standard error describes variability in an estimator.
3. The t-value compares an observed difference with its estimated standard error.
4. The p-value is not the probability that the null hypothesis is true.
5. A non-significant result does not prove the null hypothesis.
6. The choice of t-test is determined by the research design.
7. A full interpretation requires considering the effect size, uncertainty, and research design.

<!-- Editable quiz data: correct is a zero-based answer index. -->

```quiz
[
  {
    "q": "In a study, the sample mean is 75 and the standard deviation is 10. What does the standard deviation describe?",
    "opts": [
      "The precision of the estimate of the population mean.",
      "The variability of individual observations around the sample mean.",
      "The probability that the null hypothesis is true."
    ],
    "correct": 1,
    "explanation": "Standard deviation describes variability in individual observations. Standard error describes the sampling variability of an estimator."
  },
  {
    "q": "A sample has SD = 12 and n = 36. What is the estimated standard error of the sample mean?",
    "opts": ["12", "6", "2", "0.33"],
    "correct": 2,
    "explanation": "SE = 12 / √36 = 12 / 6 = 2."
  },
  {
    "q": "A statistical test gives p = 0.03. Which interpretation is correct?",
    "opts": [
      "The probability that the null hypothesis is true is 3%.",
      "Under the null hypothesis and the model, the probability of a result at least this extreme is 3%.",
      "The probability that the alternative hypothesis is true is 97%."
    ],
    "correct": 1,
    "explanation": "The p-value is the probability of a test statistic equal to or more extreme than the observed value, assuming the null hypothesis and the model, not the probability that the hypothesis is true."
  },
  {
    "q": "The same participants are measured before and after sleep deprivation. Which test should we use?",
    "opts": ["Independent-samples t-test", "One-sample z-test", "Paired-samples t-test"],
    "correct": 2,
    "explanation": "The measurements are related within individuals, so we use a paired-samples t-test."
  },
  {
    "q": "A two-sided t-test gives p = 0.18 at α = 0.05. What is the correct decision?",
    "opts": [
      "Accept the null hypothesis as true.",
      "Reject the null hypothesis.",
      "Do not reject the null hypothesis."
    ],
    "correct": 2,
    "explanation": "A non-significant result does not prove the null hypothesis. It only means that we do not reject it at the chosen level."
  },
  {
    "q": "If the standard deviation stays the same, how does increasing the sample size affect the standard error?",
    "opts": [
      "It increases the standard error.",
      "It decreases the standard error.",
      "It has no effect."
    ],
    "correct": 1,
    "explanation": "SE = s / √n. A larger n produces a smaller standard error."
  }
]
```

```explanations
{
  "one": "<strong>One-sample t-test.</strong> We compare the sample mean with a specified reference value. Each participant provides one observation.",
  "ind": "<strong>Independent-samples t-test.</strong> The two groups contain different participants, and we compare their population means.",
  "pair": "<strong>Paired-samples t-test.</strong> Each participant is measured twice. The test examines the mean of the within-person differences."
}
```
